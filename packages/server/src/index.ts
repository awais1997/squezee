import Logger from 'looger';
import * as goa from 'goa';
import { Core, HttpServer } from '@apso/server';
import { Container } from 'sahara';
import Config from './cfg';
import ControllersConfigurator from './configurators/controllers';
import DbConnection from './configurators/database';
import RouterConfigurator from './configurators/router';
import RoutesConfigurator from './configurators/routes';
import ServicesConfigurator from './configurators/services';
import HelpersConfigurator from './configurators/helpers';
import CORSMiddlewareConfigurator from './middleware/cors';
import BodyParserMiddlewareConfigurator from './middleware/json';
import ErrorHandlerMiddlerConfigurator from './middleware/error-handler';

// imports for dependency sake
require('apollo-server-lambda')
require('bcryptjs')
require('chalk')
require('graphql-type-json')
require('looger')
require('short-uuid')
require('typeorm')

const container = new Container();
const startTime = Date.now();

container
  .registerInstance(__dirname, 'AppDir')
  .registerInstance(Config, 'Config')
  .registerInstance(Config.app.name, 'AppName');

// These Configurators are exported so they can be leveraged for tests.

export const coreConfigurators = [
  Core.Configurator,
  DbConnection,
]
export const apiConfigurators = [
  // FirebaseConnection,
  HttpServer.Configurator,
  HelpersConfigurator,
  ServicesConfigurator,
  ControllersConfigurator,
]
export const serverConfigurators = [
  CORSMiddlewareConfigurator,
  BodyParserMiddlewareConfigurator,
  // CSRFMiddlewareConfigurator,
  // SessionMiddlewareConfigurator,
  RouterConfigurator,
  RoutesConfigurator,
  // handle errors (must be last):
  ErrorHandlerMiddlerConfigurator,
  HttpServer.ApolloServerConfigurator,
  HttpServer.LambdaListener
]

const configurators = [
  ...coreConfigurators,
  ...apiConfigurators,
  ...serverConfigurators
];

type Handler = (event: any, context: any) => void;

export const handler = async (event, context) => {
  try {
    await Core.configure(configurators, container)

    const log: Logger = container.resolveSync('Log');
    const app = container.resolveSync<goa.GoaApplication>('App')
    log.debug(`App configured in ${Date.now() - startTime}ms`);
    const LambdaHandler = container.resolveSync<Handler>('LambdaHandler');
    const result = await LambdaHandler(event, context);
    return result;
  } catch (err) {
    console.error(err);
    err.stack && console.error(err.stack);
    process.exit(1);
  }
}

