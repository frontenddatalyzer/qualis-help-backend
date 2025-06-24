> <span class="logo"> ![datalyzer-logo](http://localhost:1337/uploads/image1_64ac196086.jpeg) </span>
>
> **Installation Guide**
># Qualis 4.0 SPC software

## Table of Contents


1.  [Introduction](#introduction)

2.  [Requirements](#requirements)

3.  [Qualis 4.0 SPC as Client Install](#requirements)

    1.  [Installation Setup](#installation-setup)

    2.  [Database Connection](#database-connection)

    3.  [License Registration](#license-registration)

4.  [Qualis 4.0 SPC as Web Application](#qualis-4.0-spc-as-web-application)

    1.  [Prerequisites to Install Web Application](#prerequisites-to-install-web-application)

    2.  [Installation Package](#installation-package)

    3.  [Installation Options](#installation-options)

    4.  [Installation of Microsoft IIS](#installation-of-microsoft-iis)

    5.  [IIS Configuration of DataLyzer SPC](#iis-configuration-of-datalyzer-spc)

    6.  [Application Pool settings and IIS User permissions](#application-pool-settings-and-iis-user-permissions)

    7.  [Starting Qualis SPC](#starting-qualis-spc)

5.  [Installing the E-Mail Notification Service](#installing-the-e-mail-notification-service)

6.  [Appendix](#appendix)

    1.  [FAQ](#faq)

         Q1: HTTP Error 500.19 -- Internal Server Error. The requested page cannot be accessed because the related configuration data for the page is invalid \| Error Code 0x80070533 \|"Cannot log on locally to C:\customer\\\...." info folder
         
         Q2: After creating the webpage in IIS and browse for the website, I get the message that it was 'unable to load file or assembly 'DL.SatelliteCommon' or one of its dependencies'
         
         Q3: When browsing the Qualis SPC site, I get a HTTP Error 500.19 Internal Server Error..
         
         Q4: Global setting NULL issue
         
         Q5: Qualis MSA login error after Qualis Satellite upgrade
         
         Q6: Parameter carry forward issues are facing after installed latest version
         
         Q7: SPC desktop - Error 401
         
         Q8: Qualis - Creation of Sequence by part w/ block is not working
         
         Q9. Qualis SPC upgrade in Window 2008 R2 server and getting blank screen for desktop
         
         Q10: 500 -- Internal Server Error after SPC first time deployment or upgrade from framework to dot net core
         
         Q11: Emails not working after upgrade from 0.9.101.xx to 1.0.101.xx
         
         Q12: Gage Interface - Fails in Qualis SPC
         
         Q13: Qualis Mail Alerts (for OOS) failing after upgrade
         
         Q14: Qualis SPC - Gage in Desktop not working, WEBGAGE NOT WORKING, Web Gage Issue connection lost after logout/login and Gage Interface failing: Measuring data not transferred
         
         Q15: Coherent Sweden -- Issue
         
         Q16: Qualis Desktop - Only superuser account works. All other users receive Authentication Error.
         
         Q17: Permission issue -- Loading screen error in startup screen after database connection
         
         Q18: Issue with the Qualis Web-Based version. A \"Failed to Load Settings\" error, and unable to run production due to this problem.
         
         Q19: Patch failed for SPC: Please check the log file for the specific
error and try again.

# Introduction {#introduction}

> This document describes the installation process for the DataLyzer
> Qualis 4.0 SPC software. This manual is guiding you through the
> installation of the DataLyzer Qualis 4.0 SPC module as a client
> installation module (part 1) and/or the setup of the IIS tool for the
> browser based DataLyzer Qualis 4.0 SPC software (part 2). The DataLyzer Qualis 4.0 (Web) SPC module
> is part of the DataLyzer SPC software suite.
>
> For more information on the usage of the DataLyzer Qualis 4.0 SPC software, please refer to the 'User Manual Qualis 4.0 Satellite' and 'User Manual Qualis 4.0 Admin'.
>
> DataLyzer Qualis 4.0 SPC is the successor of the DataLyzer Spectrum
> software suite and can work in combination with the DataLyzer Spectrum
> Admin and Satellite modules.

# Requirements{#requirements}

> **Hardware requirements**

 - 2.0 GHz 64-bit processor

- 4-8 GB RAM

- 100 GB hard drive space

> **Software Requirements**

- Windows Server 2016 or higher

- Windows 10 version 1607 or later.

- .NET 7 runtime or higher

- IIS Compatible Version: 2008 or higher.

- .Net Core Version: 7 or higher.

- Administrator Mode: Yes.

- SQL Server 2008R2 or higher.

- Screen resolution minimum of 1300 pixels

- **DataLyzer Spectrum Version 3.30 or higher should be installed**


# Qualis 4.0 SPC as Client Install {#qualis-4.0-spc-as-client-install}

## Installation Setup{#installation-setup}

> When running the Qualis 4.0 Setup file, follow below steps. Note that
> the screenshots are based on the 1.0.103.32 build. Minor changes in
> your screens are possible.
>
> <fig>![installation-next](http://localhost:1337/uploads/image4_0b3626618c.png) </fig>
> 
>
> Press 'Next' and accept the terms and license agreement. Press 'Next'
> again and then enter the
> desired file location in below screen. By pressing change you can
> search in your Windows folders.
>
> Press 'Next' when the right location is selected.
>
> <fig> ![installation-setup](http://localhost:1337/uploads/image3_a570b1a4fa.png) </fig>
>
> Press 'Install' to start the installation process. And press 'Finish'
> once the installation is completed.

## Database Connection{#database-connection}

> Once the installation of the Qualis 4.0 client-install SPC module is
> finished and you run the software, Qualis 4.0 SPC will require to
> set-up the database connection. Below screen will

<fig> ![database-connection](http://localhost:1337/uploads/image5_031e0c0460.jpeg) </fig>

> Enter here the details of your SQL Server, and select either Windows
> Authentication to connect to the database or SQL Authentication. In
> case of SQL Authentication, enter the SQL User name and Password and
> select the right database.
>
> Press '**Test Connection**' to test whether the connection is
> successful or not and press '**Save & Continue**' in case its
> successful.

## License Registration{#license-registration}

> Once the database connection is set correctly, the next step is to
> register the license. A pop-up
> screen will appear as below. Press '**OK**'

<fig> ![license-missing](http://localhost:1337/uploads/image6_1511ca3213.jpeg) </fig>


> Now login first as 'SuperUser' with the password 'DLisgreat'. Then the
> below screen will open up to register the license for the
> installation. This step is performed once for the first user
> installing the software.
>
><fig>![license registration](http://localhost:1337/uploads/image7_b21dad426e.png)</fig>
>
> Click on the "**Generate"** button. Now a license registration code
> will be generated in the textbox Field. **Copy the generated code**
> and share it with Datalyzer.
>
> Datalyzer will create a License File based on the generated key. Save
> this License File on your computer and click on the "**Choose File"**
> button in the same window and you will get a browse popup.
>
> Select the license file sent by Datalyzer and click on 'open'. Then,
> click '**Load License'** and then
> '**Register**'. Once the registration is successful you can click
> '**Continue**'.

# Qualis 4.0 SPC as Web Application {#qualis-4.0-spc-as-web-application}

## Prerequisites to Install Web Application{#prerequisites-to-install-web-application}

> The DataLyzer Qualis 4.0 SPC Web Application can be hosted in the
> centralized Windows Server/Computer and then the configured Satellites
> can be accessible via Web URL throughout the Network.
>
> If you have any questions and/or need support during installation of
> the 'Qualis SPC Web Package' please contact our support team through
> [[support@datalyzer.com]](mailto:support@datalyzer.com) or
> contact your account manager. And, refer to our **FAQs** on Qualis
> Satellite Web Application as in the Appendix for possible issues and
> its solutions.
>
> The installation of the Qualis 4.0 SPC is compatible to below systems:

- IIS Compatible Version: 2008 or higher.

- .Net Core Version: 7

- Administrator Mode: Yes.

- SQL Server 2008R2 or higher.

## Installation Package {#installation-package}

> The Qualis SPC Web application package is shared in a ZIP file:
> "PUBLISH-QUALIS-SPC-1.0.103.32.zip". After unzipping this file, 2
> folders become available.

- NotificationWebEngine_1.0.103.32: This folder is required to setup the
  Notification Web Engine as a site in Microsoft IIS.

- SPCCombined_1.0.103.32: This folder is required to setup Qualis SPC as
  one site in Microsoft IIS (both front end and backend).

|   Name                                                 |   Date Modified      |   Type      |
|------------------------------------------|----------------------|------------|
|   SPCCombined_1.0.103.32                  |   20-12-2024 12:58 |   Folder    |
|   NotificationWebEngine_1.0.103.32    |   20-12-2024 12:59 |   Folder    |


## Installation Options {#installation-options}

> DataLyzer allows several installation options. We can installation the
> full application in one site, using the same host and port. This is
> our standard installation and that will be described in the remainder
> of this installation manual chapter.
>
> However, note that it is also possible to install the Frontend and
> Backend on same host but using a different Port, or even install the
> Frontend and Backend on different hosts and Ports. It could be desired
> to have the frontend in a different server and protect the WebAPI and
> behind a web proxy. For more information about this installation,
> contact DataLyzer Support.
>
> Also, from release 1.0.100.0 onwards (.Net Core) it is possible to run
> the Frontend and Backend on Linux.

## Installation of Microsoft IIS {#installation-of-microsoft-iis}

> To install Microsoft IIS or to check the settings, perform below
> steps.

- Go to **Control Panel**.

<fig> ![control-plan-app](http://localhost:1337/uploads/image9_95d6411dbf.jpeg)</fig>

- Click on **Turn Windows features on and off** in the below window, if
  you can't find it here go to **Uninstall a program** and on the left
  hand side you should find **Turn Windows features on and off**.

<fig>![control-plan](http://localhost:1337/uploads/image10_d20effae48.jpeg)</fig>

- The below screen will appear, click on **Next**.

<fig>![before-begin](http://localhost:1337/uploads/image11_69cf17531a.jpeg)</fig>

- Click on **Next**, again.

<fig>![installation-type](http://localhost:1337/uploads/image12_81566f7ed2.jpeg)</fig>

- Select the server and click on **Next**.

<fig>![destination](http://localhost:1337/uploads/image13_d69eae19a1.jpeg)</fig>

- Check the **<u>entire</u> item under Web server (IIS)** and then click on **Next**.

<fig>![server](http://localhost:1337/uploads/image14_ce62a4523c.jpeg)</fig>

> Make sure below items at 'Application Development Features' are checked;

<fig>![selecting feature](http://localhost:1337/uploads/image15_0f59f7a25b.jpeg)</fig>

- Click on **Install** and after installation, restart your server.

<fig>![confirmation](http://localhost:1337/uploads/image16_2f1c3e6a79.jpeg)</fig>   


## IIS Configuration of DataLyzer SPC {#iis-configuration-of-datalyzer-spc}

><u> **IIS Authentication:**</u>
>
> DataLyzer SPC can only run with Anonymous Authentication status in
> Microsoft IIS. Make sure Anonymous Authentication is enabled for the
> IIS Server.

<fig>![image17.jpeg](http://localhost:1337/uploads/image17_277761401c.jpeg)</fig>

> Verify if the status column for Anonymous Authentication is set to
> 'Enabled'.

<fig>![Authentication](http://localhost:1337/uploads/image18_44605c1ca6.jpeg)</fig>

> <u>**Install Web Hosting service**</u>
>
> Download the **.Net Hosting service 7.0.14** from the below link and
> install:
>
> [[https://salesdatalyzer.stackstorage.com/s/bOaiQBJIz4p14lWZ]](https://salesdatalyzer.stackstorage.com/s/bOaiQBJIz4p14lWZ)
>
> After installation is complete, please restart the IIS.
>
> <u>**Create the Website**</u>
>
> Follow the below steps to create the DataLyzer Qualis SPC website:

1.  Open IIS (Internet Information Service)

<fig>![open iis](http://localhost:1337/uploads/image19_ee1dd2fb6c.jpeg)</fig>

2.  Right Click on Sites, then select **'Add Website'**

<fig>![add website](http://localhost:1337/uploads/image20_067f2cb428.jpeg)</fig>

3.  Add Website window will open. Now enter the required details, refer
    to the image below.

<fig>![website window](http://localhost:1337/uploads/image21_3b60bf7616.png)</fig>

- Enter the **Site name**

- The application pool will be automatically created.

- Select the **Physical path** of the Application files folder:
  'SPCCombined_1.0.103.32'

- Select **Binding Type** either Http or Https, select/enter the IP
  address and give a Port number

- Enter the **Host name** (Contact IT team to add the Hostname in DNS
  record)

  - E.g.: qualisspc.mycompany.com

- If **Https** is selected, an SSL certificate needs to be added. Click
  On the Select button to select the SSL certificate from the List
  (Refer to the Instruction Guide 'Instruction Guide How to create SSL
  certificate for Qualis Satellite in IIS')

> Once all is entered correctly, click on '**OK**'. Now the website will
> be created.

4.  Right click on the website and browse.

## Application Pool settings and IIS User permissions {#application-pool-settings-and-iis-user-permissions}

> After creating a website, an Application Pool is setup for the Qualis
> SPC website. The below settings
> must be checked. Select the Application Pool, Right Click and click on
> **'Advanced Settings'.**
>
<fig>![advance settings](http://localhost:1337/uploads/image22_b3afc599d0.jpeg)</fig>
>
> In the Advanced Settings, change the value for 'Enable 32-Bit
> Applications' to True. Refer the below image.

<fig>![enable 32-Bit ](http://localhost:1337/uploads/image23_fbc6bd0a27.jpeg)</fig>

> Click '**OK**' to finish.
>
> Also, set the **Application Pool Identity** Under
> **Process Model,** the user should select **identity** and click on
> the 3 dots which are highlighted in yellow in below image.
>
<fig>![Application Pool Identity](http://localhost:1337/uploads/image24_53d77793f4.png)</fig>
>
> Below window will occur. Select the **Custom account.** The click set,
> for the credentials window to open.
<fig>![custom account](http://localhost:1337/uploads/image25_1c8e7f375c.png)</fig>
<fig>![set credentials](http://localhost:1337/uploads/image26_1da20923ab.png)</fig>

> Now, an Admin/ Service Account **User name** and **Password** should
> be added and then press "OK".
>
> Follow the below steps to check whether the published folder has IIS
> User access.

- Right click on the published folder.

- Click on Properties; Security

- Click on 'Edit'

- Click on 'Add'

- Click on 'Location' and select the system name

- Type IIS_IUSRS under Object name and click on Check Names. Refer the
  image below.

<fig>![iis isurs](http://localhost:1337/uploads/image52_065797c28d.png)</fig>

- Click 'OK'.

- Select the IIS_ISURS from the list of usernames and check the Allow
  option next to Full Control and Modify permissions. Refer the below
  image.

<fig>![full control](http://localhost:1337/uploads/image53_af9c1fe558.png)</fig>

- Click on 'Apply' and 'OK'.

## Starting Qualis SPC {#starting-qualis-spc}

> Once the Web Site is created and browsed for the first time, the
> software will require the user to setup a Database Connection, below
> screen will appear.

<fig>![server authentication](http://localhost:1337/uploads/image29_84079a4a43.png)</fig>

> Enter the Server Name, Authentication type as SQL Server
> Authentication or Windows Authentication and Database Name.
>
> Click on '**Test Connection'**. If the connection is successful, click
> on '**Save & Continue'**.
>
> Once the database connection is set correctly, the next step is to
> register the license. A pop-up
> screen will appear as below. Press '**OK**'

<fig>![license-missing](http://localhost:1337/uploads/image6_1511ca3213.jpeg)</fig>

> Now login first as 'SuperUser' with the password 'DLisgreat'. Then the
> below screen will open up to register the license for the
> installation. This step is performed once for the first user
> installing the software.
>
<fig>![license](http://localhost:1337/uploads/image30_8bb40c9d68.png)</fig>
>
> Click on the "**Generate"** button. Now a license registration code
> will be generated in the textbox Field. **Copy the generated code**
> and share it with Datalyzer.
>
> Datalyzer will create a License File based on the generated key. Save
> this License File on your computer and click on the "**Choose File"**
> button in the same window and you will get a browse popup.
>
> Select the license file sent by Datalyzer and click on 'open'. Then,
> click '**Load License'** and then
> '**Register**'. Once the registration is successful you can click
> '**Continue**'.

# Installing the E-Mail Notification Service

> From version 1.0.100.0 onwards, DataLyzer released a new system for
> email notifications. For both Qualis SPC Client-Install and Web
> Install, the email notification service will run in Microsoft IIS.
>
> Follow the below steps to create the site for the Email Notification
> Service.

1.  Open Microsoft IIS (Internet Information Service)

 <fig>![open iis](http://localhost:1337/uploads/image19_ee1dd2fb6c.jpeg)</fig>

2.  Right Click on Sites, then select 'Add Website'

<fig>![add website](http://localhost:1337/uploads/image20_067f2cb428.jpeg)</fig>

3.  The 'Add Website' window will appear. Enter the required details.
    Refer to the image below.

<fig>![site name](http://localhost:1337/uploads/image31_a1a835d2c6.png)</fig>

- Enter the **Site name**

- The application pool will be automatically created.

- Select the **Physical path** of the Application files folder:
  'SPCCombined_1.0.103.32'

- Select **Binding Type** either Http or Https, select/enter the IP
  address and give a Port number

- Enter the **Host name** (Contact IT team to add the Hostname in DNS
  record)

     - E.g.: qualisspc.mycompany.com

- If **Https** is selected, an SSL certificate needs to be added. Click
  On the Select button to select the SSL certificate from the List
  (Refer to the Instruction Guide 'Instruction Guide How to create SSL
  certificate for Qualis Satellite in IIS')

> Once all is entered correctly, click on '**OK**'. Now the website will
> be created. Right click on the
>   website and browse.

4.  Go to Application Pools. Right click on the Application pool created
    in Step 3 and click on Advanced Settings. Set the Idle Time-out
    to 0. Refer to the image below.

<fig>![idle time out](http://localhost:1337/uploads/image32_a3f5f724b2.png)</fig>

5.  Select the Application pool and click on Basic Settings. The below
    screen will appear.

<fig>![no managed code](http://localhost:1337/uploads/image33_3fa043d125.png)</fig>

> Change the .NET CLR version to 'No Managed Code'.

6.  Right click on the website and browse.

> When the database connection is successful, the following page will be
> displayed.
>
<fig>![connection is successful](http://localhost:1337/uploads/image34_19a8368ff9.jpeg)</fig>
>
> If the Web Page is setup correctly in Microsoft IIS, the site must be
> copied and pasted to the
>   "deployconfig.json" file in the Program Data folder.
>
> For a client-install desktop installation, this file can be found in
> the folder:
> C:\ProgramData\DataLyzer\QualisSPC\Modules\deployconfig.json.

<fig>![module deploy](http://localhost:1337/uploads/image35_91b555da44.png)</fig>


> For a Qualis SPC Web installation: wherever the site is hosted, inside
> the frontend folder you can find the "deployconfig.json" file.

<fig>![deploy](http://localhost:1337/uploads/image36_fd79beb9ad.png)</fig>

> Paste the URL of the Qualis SPC site inside this "deployconfig.json"
> for the "NotificationWebAPI" tag.

<fig>![NotificationWebAPI](http://localhost:1337/uploads/image37_e096c0a947.jpeg)</fig>

# Appendix {#appendix}

## FAQ {#faq}


### Q1: HTTP Error 500.19 -- Internal Server Error. The requested page cannot be accessed because the related configuration data for the page is invalid \| Error Code 0x80070533 \|"Cannot log on locally to C:\customer\\\...." info folder.  {#q1-http-error-500.19-internal-server-error.-the-requested-page-cannot-be-accessed-because-the-related-configuration-data-for-the-page-is-invalid-error-code-0x80070533-cannot-log-on-locally-to-ccustomer.....-info-folder.}

When browsing for the website, below error message is appearing.

<fig>![q1](http://localhost:1337/uploads/image38_9677c32c20.png)</fig>

**Solution:**

Install dot net hosting software.

Stack link:
https://salesdatalyzer.stackstorage.com/s/v8n5dd0YMkC7qTcw/en

----

### Q2: After creating the webpage in IIS and browse for the website, I get the message that it was 'unable to load file or assembly 'DL.SatelliteCommon' or one of its dependencies' {#q2-after-creating-the-webpage-in-iis-and-browse-for-the-website-i-get-the-message-that-it-was-unable-to-load-file-or-assembly-dl.satellitecommon-or-one-of-its-dependencies}

<fig>![q2](http://localhost:1337/uploads/image39_a833408a00.png)</fig>

**Solution:** The solution for this issue is to '**Enable 32-Bit Applications'** in
the IIS Application Pool Advanced Settings. Make the changes, press OK
and then Restart the website and browse again.

----

### Q3: When browsing the Qualis SPC site, I get a HTTP Error 500.19 Internal Server Error. {#q3-when-browsing-the-qualis-spc-site-i-get-a-http-error-500.19-internal-server-error}

<fig>![q3](http://localhost:1337/uploads/image40_6219708dfb.png)</fig>

**Solution:** This error appears if the **.Net Hosting service 7.0.14** is not
installed correctly. Use the installer from the below link and install:
<https://salesdatalyzer.stackstorage.com/s/bOaiQBJIz4p14lWZ>

After installation is complete, please restart the IIS.

----

### Q4: Global setting NULL issue  {#q4-global-setting-null-issue .unnumbered}

<fig>![global settings](http://localhost:1337/uploads/image41_692e48858b.png)</fig>

**Solution:** Set Qualis version 12 and do patch 14 again, then login

----

### Q5: Qualis MSA login error after Qualis Satellite upgrade. {#q5-qualis-msa-login-error-after-qualis-satellite-upgrade.}

After installing the Qualis Satellite Desktop update the superuser
account is no longer able to log onto Qualis MSA.


<fig>![inactive](http://localhost:1337/uploads/image42_0818d08806.png)</fig>


**Solution:** Run manual patch and check whether it solves the issue.

----

### Q6: Parameter carry forward issues are facing after installed latest version. {#q6-parameter-carry-forward-issues-are-facing-after-installed-latest-version.}

Parameter carry forward issues are facing after installed latest version
(09.102.64) from 16.07.2024 at Line#5 only in 1 Pc.

Same issues happened 4 months before, then after installed new V.09.102,
problem resolved.

<fig>![q6](http://localhost:1337/uploads/image43_44c060d9df.png)</fig>

**Solution:** Go to Characteristic **Enamel Rater GE → Open/Edit → Select
particular data point → Edit**

Enter correct date/time and save see if this issue solves.

----

### Q7: SPC desktop - Error 401 {#q7-spc-desktop---error-401}

When user installed the version in computer the software did the patch
automatically.  Then these errors start to appear. After manually
changing the version of database to the previous one its working fine
but the error appears in one or two computers.

version: 0.9.102.53

<fig>![q7](http://localhost:1337/uploads/image44_c79cc350c1.png)</fig>

**Solution:** Please make sure same credentials are not used in multiple
applications simultaneously.

-----

### Q8: Qualis - Creation of Sequence by part w/ block is not working {#q8-qualis---creation-of-sequence-by-part-w-block-is-not-working}

Tried creating a sequence by part in Qualis w\* block. I was not able to
do it in Qualis. The block is not appearing, plus nothing happen related
with the block.  
version:  0.9.102.64

**Solution:**

Spectrum

Sequence created with 3 blocks.

<fig>![image45.png](http://localhost:1337/uploads/image45_ee9f463356.png)</fig>

Data entry blockwise.

<fig>![image46.png](http://localhost:1337/uploads/image46_06f9cceb32.png)</fig>

Qualis SPC release 0.9.102.63

In Qualis SPC version 0.9.102.63 or 0.9.102.64, Qualis Hub integration
was not handled so there may be some problem. Qualis Satellite was using
all functionality created in Spectrum.

Same sequence: Run Sequence

In Qualis Satellite block is appearing as thin line unlike block in
Spectrum because of space.

After discussion its approved that in Qualis Satellite block will be
shown as thin line but functionality is same as spectrum does.

Data entry will be in block wise.

<fig>![image47.png](http://localhost:1337/uploads/image47_386752bfc0.png)</fig>

----

### Q9: Qualis SPC upgrade in Window 2008 R2 server and getting blank screen for desktop {#q9-qualis-spc-upgrade-in-window-2008-r2-server-and-getting-blank-screen-for-desktop}

After the installation in the server, the application does not open.

After Upgrade the Qualis SPC in server computer and when trying to open
the software. It is showing blank screen.

<fig>![image48.png](http://localhost:1337/uploads/image48_12793689a7.png)</fig>

**Solution:** Qualis desktop will not support equal to or below 2012
windows server

----

### Q10: 500 -- Internal Server Error after SPC first time deployment or upgrade from framework to dot net core {#q10-500-internal-server-error-after-spc-first-time-deployment-or-upgrade-from-framework-to-dot-net-core}

Install dot net hosting software.

Stack link:
https://salesdatalyzer.stackstorage.com/s/v8n5dd0YMkC7qTcw/en

<fig>![image49.png](http://localhost:1337/uploads/image49_6c9e147dd1.png)</fig>

----

### Q11: Emails not working after upgrade from 0.9.101.xx to 1.0.101.xx (Qualis Desktop) {#q11-emails-not-working-after-upgrade-from-0.9.101.xx-to-1.0.101.xx-qualis-desktop}

\[ERR\]
{\"Methodname\":\"SPCWebAPI.Controllers.SettingsController:TestEmailDetails\",\"input\":\"\",\"Error\":\"Mailbox
unavailable. The server response was: 5.7.1 Service unavailable, Client
host \[186.177.186.56\] blocked using Spamhaus. To request removal from
this list see [The Spamhaus
Project](https://www.spamhaus.org/query/ip/186.177.186.56) AS(1440)
\[[BL02EPF00021F6A.namprd02.prod.outlook.com](http://bl02epf00021f6a.namprd02.prod.outlook.com/)
2024-10-10T21:13:00.303Z 08DCE5A0132C0518\]\",\"stacktrace\":\"at
SPCServices.Core.Services.ConcreteClass.SPCService.TestEmailSettings(UserProfile
userProfile)\r\n at
SPCWebAPI.Controllers.SettingsController.TestEmailDetails(JObject
JSonRequestData)\",\"startupinfo\":null}

**Solution:** The log showed that the email was being blocked by the spam
filter. IT must whitelist the IP address and check to work again.

-----

### Q12: Gage Interface - Fails in Qualis SPC {#q12-gage-interface---fails-in-qualis-spc .unnumbered}

\[Error\] {\"Methodname\":\"DLGageListner:Void
OpenSerialPort()\",\"input\":\"NULL\",  
\"Error\": \"Unable to set the serial port state\",  
\"stacktrace\":\"at
RJCP.IO.Ports.Serial.Windows.CommState.SetCommState()\r\n at
RJCP.IO.Ports.Serial.WinNativeSerial.SetPortSettings()\r\n at
RJCP.IO.Ports.SerialPortStream.Open(Boolean setCommState)\r\n at
RJCP.IO.Ports.SerialPortStream.Open()\r\n at
SPCServices.Core.Services.ConcreteClass.DLGageListner.OpenSerialPort()\"  
,\"startupinfo\":null}

**Solution:** Check if the port has been un-assigned after connecting to
Spectrum, and connect again in Qualis.

----

### Q13: Qualis Mail Alerts (for OOS) failing after upgrade {#q13-qualis-mail-alerts-for-oos-failing-after-upgrade}

Characteristic:Dekking zijde B\",\"Error\":\"The SMTP server requires a
secure connection or the client was not authenticated. The server
response was: 5.7.57 Client not authenticated to send mail. Error: 535
5.7.139 Authentication unsuccessful, account has an issue. Contact your
administrator.
\[[AM8P190CA0003.EURP190.PROD.OUTLOOK.COM](http://am8p190ca0003.eurp190.prod.outlook.com/)
2024-10-04T07:21:07.773Z 08DCE3FEF68EE81B\]\",\"stacktrace\":\"at
System.Net.Mail.MailCommand.CheckResponse(SmtpStatusCode statusCode,
String response)\r\n   at
System.Net.Mail.SmtpTransport.SendMail(MailAddress sender,
MailAddressCollection recipients, String deliveryNotify, Boolean
allowUnicode, SmtpFailedRecipientException& exception)\r\n   at
System.Net.Mail.SmtpClient.Send(MailMessage message)\r\n   at
SPCServices.Core.Services.ConcreteClass.SPCService.sendEmail(SmtpClient
\_smtpClient, String adminEmail, List\`1 mailList, String message,
String characteristic)\",\"startupinfo\":null}

**Solution:** Check SMTP server authentication checkbox and try sending test
mail

-----

### Q14: Qualis SPC - Gage in Desktop not working, WEBGAGE NOT WORKING, Web Gage Issue connection lost after logout/login and Gage Interface failing: Measuring data not transferred {#q14-qualis-spc---gage-in-desktop-not-working-webgage-not-working-web-gage-issue-connection-lost-after-logoutlogin-and-gage-interface-failing-measuring-data-not-transferred}

**Solution:**

**Note1:** The gage cable must be physically disconnected and reconnected in
scenarios such as after logging out and logging back in, or when
switching between the hub and satellite modes.

**Note2:** If a user connects a specific port in the desktop gage, they must
unassign the port and its associated template in the desktop gage
configuration, save the changes, logout from application, and then
connect the same port in the web gage.

**Note3:** If a user connects a specific port in the web gage, they have to
logout from application, and then connect the same port in the desktop
gage.

----

### Q15: Coherent Sweden -- Issue {#q15-coherent-sweden-issue}

A problem in Qualis spc web 1.0.101.29, when trying to login system is
giving an Error 401 and unable to enter the system  
  
The host is the SPC Server (can login) and the host is on the same wlan
as the SPC server (can also log in). All other hosts get error 401.

if a PC is outside the hosting network, the application allows to login
but cannot enter. From the server they are hosting and can login without
any problem.

**Solution:** Reinstalled in a new server using HTTPS site.

When using a HTTP site (on the new server) will have the same problem.

----

### Q16: Qualis Desktop - Only superuser account works. All other users receive Authentication Error. {#q16-qualis-desktop---only-superuser-account-works.-all-other-users-receive-authentication-error. .unnumbered}

Qualis Desktop 1.0.102.17, No new users can log in. Only the superuser
account works. We've tried creating new roles, removing uppercase
characters from the username, creating new passwords, etc. Everyone sees
this:

<fig>![image50.png](http://localhost:1337/uploads/image50_f9bb23a36c.png)</fig>

**Solution:** Please run the below query in the database and follow the
steps:

**Query:**  update SystemSettings set PasswordEncryptionType=1

1.  After running the query, logout from application, close and
    re-launch Qualis Desktop

2.  Login with Superuser and edit all other user's passwords, change
    password and save it.
    
    ----

### Q17: Permission issue -- Loading screen error in startup screen after database connection {#q17-permission-issue-loading-screen-error-in-startup-screen-after-database-connection}

<fig>![image51.png](http://localhost:1337/uploads/image51_5fb6aa5602.png)</fig>

**Solution:**

Follow the below steps to check whether the published folder has IIS
User access.

- Right click on the published folder (path selected in step 3).

- Click on Properties-\>Security

- Click on Edit

- Click on Add

- Click on Location and select the system name

- Type IIS_IUSRS under Object name and click on Check Names. Refer the
  image below

<fig>![iis isurs](http://localhost:1337/uploads/image52_065797c28d.png)</fig>

- Click on OK.

- Select the IIS_ISURS from the list of usernames and check the Allow
  option next to Full Control and Modify permissions. Refer the below
  image.

<fig>![full control](http://localhost:1337/uploads/image53_af9c1fe558.png)</fig>

- Click on Apply and Oks

-----

### Q18: Issue with the Qualis Web-Based version. A \"Failed to Load Settings\" error, and unable to run production due to this problem.  {#q18-issue-with-the-qualis-web-based-version.-a-failed-to-load-settings-error-and-unable-to-run-production-due-to-this-problem.}

<fig>![image54.png](http://localhost:1337/uploads/image54_8a9e02a1b8.png)</fig>

**Solution:**

**Issue:** Got error in login screen as Failed to Load setting ! Contact
your administrator

Possibilities to get error: Above error will connect when DB server is Shutdown / Global setting may be modified in DB.

Verified the DB server and Updated the Default Global setting as per
version the Qualis release version

-----

### Q19: Patch failed for SPC: Please check the log file for the specific error and try again {#q19-patch-failed-for-spc-please-check-the-log-file-for-the-specific-error-and-try-again}

Error Code:350

Application ID:1

Application Name: Qualis SPC

2024-12-11 21:58:23.033 +01:00 \[INF\] Error executing patch script:
Invalid column name \'VERSION\'.

2024-12-11 21:58:23.036 +01:00 \[DBG\] query Failed to create

2024-12-11 21:58:23.036 +01:00 \[INF\] Execute Patch for version :1
failed

2024-12-11 21:58:23.036 +01:00 \[ERR\]

Collation is using CS but I also tried CI for case insensitive and that
had no effect

**Solution:** Collation issue, execute the below query:

ALTER DATABASE test2 SET SINGLE_USER WITH ROLLBACK IMMEDIATE;

ALTER DATABASE test2 COLLATE SQL_Latin1_General_CP1_CI_AS;

ALTER DATABASE test2 SET MULTI_USER;

