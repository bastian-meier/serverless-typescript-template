# serverless-typescript-template

## Important files and Folders:

* src/models.ts

   Type definitions for our lambda function
   
* src/handler.ts

   Entry Point of our lambda function
   
* event.json

   The Data used by the lambda-function type **IEventPayload**
   
* serverless.yml

   The definition of the lambda function for serverless framework.
   You should change the service-name in line 1
   
## Scripts

* npm run test

    uses the content from *event.json* to call your lambda function and outputs its return
    
* npm run deploy

    deploys your lambda function to aws, this function needs your aws keys, read **adding aws keys to serverless** for Informations
  
## usable links

* [serverless docs](https://serverless.com/framework/docs/providers/aws/)
* [typescript docs](https://www.typescriptlang.org/docs/home.html)
* [aws lambda docs](http://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
    
## adding aws keys to serverless

1. Create or login to your Amazon Web Services Account and go to the Identity & Access Management (IAM) page.

2. Click on **Users** and then **Add user**. Enter a name in the first field to remind you this User is the Framework, like `serverless-admin`. Enable **Programmatic access** by clicking the checkbox. Click **Next** to go through to the Permissions page. Click on **Attach existing policies directly**. Search for and select **AdministratorAccess** then click **Next: Review**. Check everything looks good and click **Create user**. Later, you can create different IAM Users for different apps and different stages of those apps.  That is, if you don't use separate AWS accounts for stages/apps, which is most common.

3. View and copy the **API Key** & **Secret** to a temporary place. You'll need it in the next step.
   
4. Run the **serverless config credentials** command:

   ```bash
   serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET
   ``` 