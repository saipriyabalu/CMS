// define URL and for element
const url = "https://codeinnovateocm-natdcshjumpstartprod.cec.ocp.oraclecloud.com/content/management/api/v1.1/items/";
const form = document.querySelector('form');

// add event listener
form.addEventListener('submit', e => {

    // disable default action
    e.preventDefault();

    // collect files
    const files = document.querySelector('[name=file]').files;
    const formData = new FormData();
    formData.append("item", "{\n \"name\": \"Smp.png\",\n  \"type\": \"Image\",\n  \"description\": \"Item1 description\",\n  \"slug\": \"Imgtm1\",\n  \"repositoryId\": \"CA087393E81540A294055AE69C5756BC\"\n}");
    formData.append('file', files[0]);

    // post form data
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.responseType = 'json';

    // log response
    xhr.onload = () => {
        console.log(xhr.response);
    };

    // create and send the reqeust
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=---1234567890");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader("Authorization", "Basic c3RoaXJ2YWs6RkBpdGhpblNhaTEy");
    xhr.send(formData);
});


