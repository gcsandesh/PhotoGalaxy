import React from "react"

export default function PhotoUploadPage() {

	return (
        <div>
            <h1>Upload Your Photos</h1>

            <form action="/submit-photo" method="post" enctype="multipart/form-data"/>
            <label for="photo">Select a Photo:</label>
            <input type="file" id="photo" name="photo"/>

            <label for="title">Title:</label>
            <input type="text" id="title" name="title"/>

            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea>

            <label for="keywords">Keywords (comma separated):</label>
            <input type="text" id="keywords" name="keywords"/>

            <input type="submit" value="Upload"/>
            
        </div>
		
	)
}
