# serverless-typescript-template

A template for a serverless aws function with typescript.

## Install

Of course you can just clone the repository:


   ```bash
   git clone git@github.com:bastian-meier/serverless-typescript-template.git
   ``` 
   
But you could also use the [serverless-typescript-generator](https://github.com/bastian-meier/serverless-typescript-generator) to generate a project that then holds you aws lambda functions


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
   
## adding node moules to you function

### aws-sdk

should be installed with *npm install --save-dev aws-sdk* to not be bundled to your lambda function on deploy

### other node modules

should be installed with *npm install -save NODE_MODULE_NAME*, they will get bundled by typescript/webpack
just import the elements you really need into your code, this will help to reduce the generated lambda function size on deploy