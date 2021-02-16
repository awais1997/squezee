import React from 'react';
import clsx from 'clsx';
import { Bar, Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useGetLeadsMetricsQuery } from '../../../../generated/graphql'
import moment from 'moment';
import { data, options } from './chart';

import { Theme } from '@material-ui/core';
import palette from '../../../../theme/palette';
import chroma from "chroma-js";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

interface RawData {
  title: string;
  date: string;
  count: number;
}

interface LineDataSet {
  label: string;
  backgroundColor: any;
  data: number[]
}

interface LineData {
  labels: string[];
  datasets: LineDataSet[]
}

const createDateArray = (dayCount: number) => {
  const today = moment().format('DD MMM YYYY');
  const days = [today];
  for (let i = 1; i <= dayCount; i++) {
    days.unshift(moment().subtract(i, 'd').format('DD MMM YYYY'))
  }
  return days;
}

const getIndices = (length: number) => Array.from({ length }, (k, v) => v * (1 / length));

const getColors = (scale: any, length: number) =>
  getIndices(length)
    .map(scale)
    .map((x: any) => `rgba(${x._rgb.map((x: any) => parseInt(x, 10)).join(",")})`);

const randomScale = () => {
  const scales = [
    "OrRd",
    "PuBu",
    "BuPu",
    "Oranges",
    "BuGn",
    "YlOrBr",
    "YlGn",
    "Reds",
    "RdPu",
    "Greens",
    "YlGnBu",
    "Purples",
    "GnBu",
    "Greys",
    "YlOrRd",
    "PuRd",
    "Blues",
    "PuBuGn",
    "Viridis",
    "Spectral",
    "RdYlGn",
    "RdBu",
    "PiYG",
    "PRGn",
    "RdYlBu",
    "BrBG",
    "RdGy",
    "PuOr",
    "Set2",
    "Accent",
    "Set1",
    "Set3",
    "Dark2",
    "Paired",
    "Pastel2",
    "Pastel1"
  ];
  const max = scales.length - 1;
  const idx = Math.floor(Math.random() * Math.floor(max));
  return scales[idx];
};

const stackedGraphData = (records?: RawData[]): LineData => {
  if (!records) {
    return {
      labels: createDateArray(7),
      datasets: []
    } 
  }
  const lines = records.map(item => item.title)
    .filter((value, index, self) => self.indexOf(value) === index);
  const dataSetsLength = lines.length;
  const colorBrew = 'Pastel2';
  const colors = getColors(chroma.scale(colorBrew), dataSetsLength);
  console.log(colors)
  return records.reduce((accum, record) => {
    const { title, date, count }: {
      title: string, date: string, count: number
    } = record;

    const dateIndex = accum.labels.findIndex((r: any) => r === date);

    const labelIndex = accum.datasets.findIndex((r: any) => r.label === title);

    if (typeof labelIndex === 'number' && labelIndex > -1) {
      const dataSet = accum.datasets[labelIndex] || {}
      const collection = dataSet.data || []
      collection[dateIndex] = count
      // collection.push(count)
      accum.datasets[labelIndex] = dataSet
    } else {
      const dataSet: LineDataSet = {
        label: title,
        backgroundColor: colors[accum.datasets.length],
        data: accum.labels.map((l) => 0)
      }
      dataSet.data[dateIndex] = count
      accum.datasets.push(dataSet)
    }


    return accum
  }, {
    labels: createDateArray(7),
    datasets: []
  } as LineData)
}

const LatestLeads = (props: any) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const { data: Data, loading, error } = useGetLeadsMetricsQuery();


  const results: LineData = stackedGraphData(Data?.getLeadsMetrics);
  console.log("RESULTS", results);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        action={
          <Button
            size="small"
            variant="text"
          >
            Last 7 days <ArrowDropDownIcon />
          </Button>
        }
        title="Latest Leads"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Line
            data={results}
            options={options}
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          Overview <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default LatestLeads;
