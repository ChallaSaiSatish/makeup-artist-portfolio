function doPost(e) {
    try {
        // Access the active sheet in the active spreadsheet
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        
        // Parse the JSON data from the POST request
        var data = JSON.parse(e.postData.contents);

        // Basic validation to ensure required fields are provided
        if (!data.name || !data.email || !data.subject || !data.message) {
            // Return an error message if any field is missing
            return ContentService.createTextOutput("Error: Missing required fields").setMimeType(ContentService.MimeType.TEXT);
        }

        // Append the validated data to the active sheet
        sheet.appendRow([data.name, data.email, data.subject, data.message]);
        
        // Return a success message
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
        // Log the error for debugging
        Logger.log(error.toString());
        
        // Return an error message with details
        return ContentService.createTextOutput("Error: " + error.message).setMimeType(ContentService.MimeType.TEXT);
    }
}
