# studentRptCard
- Integrate data from the xlsx worksheet with the nodemailer application to be able to send emails to each student in the database.

## Prerequisites
- [x] node version v8.16.2 and above

### How should this be manually tested?
1. Navigate to a folder where you wish to host the application and open the terminal or your choice editor.
2. Run `mkdir my_project` on the terminal.
3. Run-on terminal `cd my_project`
4. Run-on terminal `git clone https://github.com/Teatoller/studentRptCard.git`
5. cd `studentRptCard.git`
6. Add a .env file and check format using the .env.example file provided.
7. Install dependencies by running  `npm install` on terminal.
8. Use [Google Help centre](https://support.google.com/accounts/answer/185833) to add `studentRptCard` to list of gmail apps and also to generate a password string to use with the **.env file**. (Note: without doing this you will not succesfully test out the application)
9. run `node index.js` on the terminal. You should see printed on the terminal confirmation of sent emails  as in  **Figure 1**.
10. Check the email address you associated with the **.env**. The mail Daemons will be in your inbox as the email used are not actual emails. You ill be able to visualize also the email template with the student details.


#### Screenshots (if appropriate)
**Fig:1**
steven@steven-RV410-RV510-S3510-E3510:~/Documents/sphereConsultancy/studentRptCard$ node index.js
Email sent!250 2.0.0 OK  1572029469 e17sm3845838pfh.121 - gsmtp
Email sent!250 2.0.0 OK  1572029469 c128sm3551560pfc.166 - gsmtp
Email sent!250 2.0.0 OK  1572029469 m123sm3493971pfb.133 - gsmtp
Email sent!250 2.0.0 OK  1572029470 y17sm3600774pfo.171 - gsmtp
Email sent!250 2.0.0 OK  1572029471 q184sm2089714pfc.111 - gsmtp
Email sent!250 2.0.0 OK  1572029471 d19sm2671450pjz.5 - gsmtp
Email sent!250 2.0.0 OK  1572029472 w189sm3471902pfw.101 - gsmtp
Email sent!250 2.0.0 OK  1572029472 k17sm3734996pgh.30 - gsmtp
Email sent!250 2.0.0 OK  1572029473 22sm3061712pfj.139 - gsmtp
Email sent!250 2.0.0 OK  1572029473 j10sm2919991pfn.128 - gsmtp
