import React from "react"

export default function PhotoUploadPage() {

    return (
        <div>
            <div class="container">
                <h1 class="text-center my-5">Upload Your Photos</h1>
                <form action="/submit-photo" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="photo">Select a Photo:</label>
                        <input type="file" class="form-control-file" id="photo" name="photo" />
                    </div>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" id="title" name="title" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea class="form-control" id="description" name="description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="keywords">Keywords (comma separated):</label>
                        <input type="text" class="form-control" id="keywords" name="keywords" />
                    </div>
                    <input type="submit" class="btn btn-primary" value="Upload" />
                </form>
            </div>





        </div>

    )
}
