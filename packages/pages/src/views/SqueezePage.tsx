import React from 'react';
import {
  Exact,
  GetPublicLandingPageQuery,
    useGetPublicLandingPageQuery 
} from '../generated/graphql';
import BasePage from '../components/BasePage';
import SqueezeBody from '../components/SqueezeBody';
import { useHistory } from 'react-router-dom';
import { QueryHookOptions } from '@apollo/react-hooks';

const SqueezePage = (props: any) => {
  console.log('PROPS', props)
  const {match: { params }} = props;
  const history = useHistory();
  const options: QueryHookOptions<GetPublicLandingPageQuery, Exact<{ slug: string; }>> = { 
    fetchPolicy: "network-only", 
    variables: {
      slug: params.pageSlug 
    },
  }
  const {data, loading, error} = useGetPublicLandingPageQuery(options);

  if (loading || !data) {
    return (
      <div>loading...</div>
    )
  }

  if (!loading && !data) {
    history.push('/not-found');    
    return (<div />)
  }

  return (
    <BasePage {...data!.getPublicLandingPage}>
      <SqueezeBody {...data!.getPublicLandingPage} />
    </BasePage>
  );
};

export default SqueezePage;
