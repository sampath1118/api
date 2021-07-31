lms
lead management system

admin
id,name,email,phone,password,createdAt
faculty
id,name,email,phone,password,branch,createdAt
student
id,name,email,phone,password,course,createdAt
courses
id,name,price,days,createdAt
slots
id,name,createdAt
batch
id,faculty,student,course,slot,present,status,approved,reason,remarks,createdAt

admin-can do-[admin,faculy,student,courses,slots,batch,attendance]
faculty can do-[student,courses,slots,batch,attendance]
student [attendance]

login
role admin
faculty
student

insert create(...fields)
delete findByIdAndDelete
update findByIdAndUpdate then save()
view find({})

login createToken sign id,role
|
token
|
verification verfiy(role===admin || faculty || student)
do next or not
