This project was Created for Overflow Digital Solutions

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000/overflow](http://localhost:3000/overflow) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run-scripts build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `Home Page`

The home page is located at src > Pages > Home.js. The data for the Home page comes from three files:

- sectionsData.js - for the first two sections
- serviceCardsData.js - for the data in the service cards displayed on the home page
- Home.js - for the data in testimonials

### `Header`

The data for header comes from the src > components > Header.js file.
The data for the side navigation on the mobile screen comes from the src > components > SideDrawer > SideDrawer.js file.

### `Footer`

The data for the Footer is available in the file src > components > Footer.js

### `About Us`

The data for About Us page comes from the file src > data > servicesData > aboutUsData.js

### `Blogs`

The data for Blogs page comes from the firebase cloud storage.

### `Appointment Setting`

The data for Appointment Setting page comes from the file src > data > servicesData > appointmentSettingData.js

### `Tele Marketing`

The data for Tele Marketing page comes from the file src > data > servicesData > teleMarketingData.js

### `Data Cleaning`

The data for Data Cleaning page comes from the file src > data > servicesData > dataCleaningData.js

### `Digital Lead`

The data for Digital Lead page comes from the file src > data > servicesData > digitalLeadServicesData.js

### `Appointment Setting`

The data for Appointment Setting page comes from the file src > data > servicesData > appointmentSettingData.js

### `Mobile & web Apps`

The data for Mobile & web Apps page comes from the file src > data > servicesData > mobileWebAppsData.js

### `Restaurant-App`

The data for Restaurant-App page comes from the file src > data > servicesData > restaurantAppData.js

### `Business Events`

The data for Business Events page comes from the file src > data > servicesData > businessEventsData.js

### `Sales Training`

The data for Sales Training page comes from the file src > data > servicesData > salesTrainingData.js

### `Marketing Automation`

The data for Marketing Automation page comes from the file src > data > servicesData > marketingAutomation.js

### `Advanced Digital Solutions`

The data for Advanced Digital Solutions page comes from the file src > data > servicesData > advanecdDigitalData.js

### `Video and Animation`

The data for Video and Animation page comes from the file src > data > servicesData > videoAnimationData.js

### `COntact`

The data for COntact page comes from the file src > Pages > Contact.js.

### `Edit Content`

To Edit the content for a page you need to go to the file containing the data. The files for data contain a JSON object which is read and rendered by the application and generates a web page. The JSON object has following features :
{
id: "aboutUs-sec",
sectionAlign: "content-left",
sectionClasses: ["section", "about-setting-1"],
data: [
{
id: "01",
contentType: "text",
tag: "h2",
text: "Let us overflow your business.",
},
{
id: "02",
contentType: "horizontal Line",
width: "25%",
tag: "hr",
margin: "0",
border: "2px solid #0e38aa",
},
{
id: "03",
contentType: "text",
size: "14px",
tag: "p",
text:
"Overflow Digital Solutions takes great pride in having the ability of problem-mindset.",
},

The `contentType` attribute shows what type of data is rendered.
The `text` attribute contains the data to be displayed. This is where you can edit the content.

### `Adding New Content`

To add a `New Section` you need to add the following type of JSON object to the data file of the page you want to edit.
{
id: "aboutUs-sec", `<- Section ID needs to be in sequence`
sectionAlign: "content-left", `<- for sections in which the content is displayed in the left and image is displayed in the right`
sectionClasses: ["section", "about-setting-1"],
data: [] `<- This array contains the list of objects you want to display`
}

To `add heading` to the new section add the following object to the data[] array:
{
id: "01", `<- this is the ID for the element`
contentType: "text", `<- type of to be displayed`
tag: "h2", `<- Tag of the heading`
text: "Let us overflow your business.", `<- content of the heading`
},

To add `horizontal line` use the below JSON object inside the data[] array.
{
id: "02",
contentType: "horizontal Line",
width: "25%", `<- denotes the width of the line`
tag: "hr",
margin: "0",
border: "2px solid #0e38aa", `<- the #0e38aa denotes the color of the line`
},

To `Add a text` use the below JSON object inside the data[] array.
{
id: "03",
contentType: "text",
size: "14px",
tag: "p",
text:
"Overflow Digital Solutions takes great pride in having the ability of problem-mindset.", `<- content for the text`
},

### `Change Images`

To `Change Image` simply find the image name from src > images folder and replace the image with the exactly same name and extension.

### `Update changes`

After making the required changes to deploy your changes open command prompt. go to the folder location where the src folder resides. In the command promt /terminal execute the code `npm run-script build`. This will create a folder names `build` in the same location wheer src folder resides. The all contents of this folder are to be copied to the public_html folder in C-panel. Folders can not be uploaded in C-panel. to overcome this, you need to go inside the specific folder and copy its contents.
Once all the files in the build folder have been copied to c-panel, Refresh the website URL `https://www.overflowdigitalsolutions.com/` and the changes should be visible.
