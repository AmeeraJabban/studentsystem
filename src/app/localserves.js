class studentServicesClass{
    constructor(){}
    GetAll=()=>{
        return $.get('/API/students/');
    }
    GetByID=(ID)=>{
        return $.get('/API/student/ID/'+ ID)
    }
    Add=(student)=>{
        return $.post('/API/student/add', student);
    }
    Update=(student)=>{
        return $.ajax({
            url :'/API/student/Edit',
            dataType: 'json', 
            data: student,
            type : 'PUT',
        });
    }
    Delete=(ID)=>{
        return $.ajax({
            url :'/API/students/Delete/ID/'+ ID,
            type : 'DELETE',
        });
    }
}
var studentSvc=new studentServicesClass();