import React from 'react';

import PageBody from './components/PageBody';
import PageWrapper from './components/PageWrapper';
import {
    useCreateLandingPageMutation, 
} from '../../generated/graphql';
import { useHistory } from 'react-router-dom';

const Page = (props: any) => {
    const { className, ...rest } = props;
    const history = useHistory();
    const [createLandingPage] = useCreateLandingPageMutation();

    const handleSave = (data: any) => {
        return createLandingPage({
            variables: {
                data
            }
        }).then(() => history.goBack())
    }

    const title = 'Create a new Squeeze Page';

    return (
        <PageWrapper title={title}>
            <PageBody onSave={handleSave} />
        </PageWrapper>
    );
};

export default Page;
