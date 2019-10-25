module.exports = {
    emailTemplate: function (
        student_name,
        attendance,
        firstRecommendation,
        finalRecommendation,
        firstReason,
        finalReason,
        ip1Score,
        ip2Score,
        ip3Score,
        ip4Score
    ) {
        return `<!DOCTYPE html>
        <html>
            <head>
                <title>Report Card</title>
            </head>
            <body>
                <h2>Dear ${student_name}</h2>
        
                <p>Thank you for the participation during the current semester at Moringa school.</p>
                <p>Your attendance score card is as follows;</p>
                <div>
                    <h2>Attendance: ${attendance}</h2>
                </div>
        
                <div>
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td><b>IP1/31</b></td>
                            <td>${ip1Score}</td>
                        </tr>
                        <tr>
                            <td><b>IP1/22</b></td>
                            <td>${ip1Score}</td>
                        </tr>
                        <tr>
                            <td><b>IP1/23</b></td>
                            <td>${ip1Score}</td>
                        </tr>
                        <tr>
                            <td><b>IP1/28</b></td>
                            <td>${ip1Score}</td>
                        </tr>
                    </table>
                </div>
                <div>
                <h3><u>Recommendation</u></h3>
                <p><b>First Recommendation:</b> ${firstRecommendation}</p>
                ${firstRecommendation === 'No' ? `<p><b>Reason:</b> ${firstReason}</p>` : `<p></p>`}
                <p><b>Final Recommendation:</b> ${finalRecommendation}</p>
                ${finalRecommendation === 'No' ? `<p><b>Reason:</b> ${finalReason}</p>` : `<p></p>`}
                </div>
                <p><b>Yours Sincerly</b></p>


                <p><b>Adminstrator</b></p>
            </body>
        </html>`
    }
}