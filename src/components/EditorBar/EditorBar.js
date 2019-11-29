import React, {Component} from 'react';
import { Editor } from '@tinymce/tinymce-react';
class EditorBar extends Component {



    handleEditorChange = (e) => {
    }

    render() {
        return (
            <Editor
                apiKey="dqhixnafcuo4nlj096s7byy8mmqp9cxa5xsr9lmk85hfabyq"
                init={{
                    height: 400,
                    menubar: false,
                    language: 'ru',
                    branding: false,
                    resize: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat'
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default EditorBar;