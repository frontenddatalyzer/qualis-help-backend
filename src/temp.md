> **DataLyzer International, Inc**

**Instruction Guide: DataLyzer Qualis**

> **SPC Web Gage Configuration**

**[Introduction]{.underline}**

This document contains more information on how to configure gages
through the 'Web Gage Configuration' for Qualis SPC running in Web
version.

**[Preconditions :]{.underline}**

- The minimum required version of Qualis SPC is version 0.9.102.1.

- Browser compatibility minimal requirements:

> o Chrome Released 02-03-2021, Version 89.0.4389 o Edge Released
> 04-03-2021, Version 89.0.774.18 o Opera Released 24-03-2021, Version
> 75.0.3969.171

- The Gage Template should still be created and saved in the database
  through the DataLyzer Spectrum application.

- The Gage Cable is connected to the USB port of the Computer/Laptop.

- Login with Superuser or Administrator to configure Web Gages.

**[How to Configure Web Gages:]{.underline}**

As Admin user, the Gage Icon will be visible in the left lower corner as
highlighted in the below image.

![](media/image1.jpg){width="3.4991666666666665in"
height="2.1222222222222222in"}

Clicking on this Gage Icon will open up the following Gage Configuration
window:

![](media/image2.jpg){width="3.317638888888889in"
height="2.2069444444444444in"}

In the Gage Configuration window, the user needs to select the Gage
Template and click on the '**Connect**' button. An option will show the
serial port popup with port details and user needs to select the right
port. For Ex (COM3, COM4) and click on '**Connect**'.

Note1: The gage cable must be physically disconnected and reconnected in
scenarios such as after logging out and logging back in, or when
switching between the hub and satellite modes.

Note2: If a user connects a specific port in the desktop gage, they must
unassign the port and its associated template in the desktop gage
configuration, save the changes, logout from application, and then
connect the same port in the web gage.

Note3: If a user connects a specific port in the web gage, they have to
logout from application, and then connect the same port in the desktop
gage.

![](media/image3.jpg){width="5.117916666666667in"
height="3.238888888888889in"}

Once the connection is established successful, the 'Connect' button will
be changed to 'Reconnect/View' like shown in the below image.

![](media/image4.jpg){width="5.116666666666666in"
height="2.446527777777778in"}

In some cases the connection may be unsuccessful after connect, in that
case the user needs to unplug and plug the Gage Cable to same USB port
and click 'Reconnect/View'.

If the connection is successful, the users can run the sequences and the
data will flow from the Gage automatically in Qualis Web Version.

If the browser Restarts/ or the PC Restarts/ or the browser is closed
accidentally, the user can open the browser again and user has to
physically disconnect and connect the cable and click 'Reconnect/View'

**!! If the user clears the browser cache, then all the configurations
will be cleared off and in that case user needs to perform the setup
again.**

Also, if a user made a duplicate connection for the same templates, then
port will take the latest connection.
