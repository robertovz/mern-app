import axios from 'axios';
import Swal from 'sweetalert2'

// CommonJS
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});


export const getItems = () => {

    return axios.get('/movies').then(res => {
        return res.data;
    })
}

export const getItem = (id) => {

    return axios.get('/movies/' + id).then((res) => {
        return res.data;
    })
}

export const createItem = (data) => {

    return axios.post('/movies/', data).then(() => {

        toast.fire({
            type: "success",
            title: "Post Created in successfully",
            icon: "success"
        })
    })
        .catch(err => {
            console.log(err);
            Swal.fire("Failed!", "There was something wrong.", "warning");
        });
}

export const updateItem = (id, data) => {

    return axios.put('/movies/' + id, data ).then(() => {

        Swal.fire(
            'Updated!',
            'Information has been updated.',
            'success'
        )
    })
        .catch(err => {
            console.log(err);
            Swal.fire("Failed!", "There was something wrong.", "warning");
        });
}

export const deleteItem = (id) => {

    return Swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: "true",
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
            if (result.value) {
                axios.delete('/movies/' + id).then(() => {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }).catch(() => {
                    Swal.fire("Failed!", "There was something wrong.", "warning");
                });
            }
        });
}
