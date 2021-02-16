# Process
- White label
  - Create tenant level features
    - Branding
    - DNS Support
- Add Sender 
  - Add email address (simple)
    - verify email
  - Add domain (advanced)
    - supply dkim records
- Add SMS (Pro-feature: free user can pick email or text, but not both)
- Add Push Notification api (Pro-feature only)
- Create message template(s)
  - Email
  - SMS
  - Push Notification
- Create a Sequence
  - Select sender
  - Create a Step
    - Select Message Type
    - Select Message Template
    - Schedule Message
      - Immediate [Intial or Different Message Type only]
      - in X days (simple) [Any step and message type]
      - If prior message is unopened in X days (filtered) [subsequent steps only]
      - If prior message is unclicked in X days (filtered) [subsequent steps only]
- Send Message
  - Track
    - Delivery
    - Open
    - Bounce
    - Click(s)
- Schedule Next Message 
  - in X days (simple)
  - If prior message is unopened in X days (filtered)
  - If prior message is unclicked in X days (filtered)
  - Track
    - Scheduled
- Start another Sequence (advanced)
  - in X days (simple)
  - If prior message is unopened in X days (filtered)
  - If prior message is unclicked in X days (filtered)
  - Track
    - Scheduled

```
Store: {
    account: Account
    sender: {
        current: Sender // Get
        collection: Sender[] // List
    }
    lead: {
        current: Lead // Get
        collection: Lead[] // List
    }
    sequence: {
        current: Sequence // Get
        collection: Sequence[] // List
    }
    template: {
        current: Template // Get
        collection: Template[] //List
    }
}
Account: {
    id: number
}
Billing: {
    id: number
    accountId: number
    status: string
    invoice: string
}
Sender: {
    id: number
    accountId: number
    email: string
}
Lead: {
    id: number
    accountId: number
    email: string
    cell: string
    deviceToken?: string // For push notifications?
}

Sequence: {
    id: number
    accountId: number
    name: string
    order: string[]
    status: 'active' | 'inactive'
}

SequenceMessage: {
    id: number
    accountId: number
    type: email | sms | push-notification
    templateId: number
}

Template: {
    id: number
    accountId: number
    type: email | sms | push-notification
    body: text
}

LeadNotification: {
    leadId: number
    sequenceId: number
    sequenceMessageId: number
    status: 'scheduled' | 'delivered' | 'opened' | 'clicked' | 'hard-bounced' | 'soft-bounced' | 'undeliverable' | 'spammed'
    deliveryDate: timestamp
}

Webhooks: {
    id: number
    accountId: number
    url: string
    events: all | notification.scheduled | notification.delivered | notification.opened | notification.clicked

}
```


### GENERIC SHIT BELOW

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
