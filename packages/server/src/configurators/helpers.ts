import { Container } from 'sahara';
import AwsConfigurator from '../helpers/aws';
import StripeConfigurator from '../helpers/stripe';
import JwtTokenHelper from '../helpers/JwtTokenHelper'

export default async (container: Container): Promise<void> => {
    AwsConfigurator(container);
    StripeConfigurator(container);
    container.registerType(JwtTokenHelper)
}