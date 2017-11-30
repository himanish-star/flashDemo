
let flash=require('connect-flash'),
    express=require('express'),
    app=express(),
    cookieParser=require("cookie-parser"),
    session=require("express-session"),
    exphbs=require('express-handlebars');

app.engine('handlebars',exphbs.create().engine);
app.set('view engine','handlebars');

app.use(cookieParser());
app.use(session({
    saveUninitialized:true,
    resave:true,
    secret:"key"
}));

app.use(flash());


app.get('/flash',(req,res)=>{
    req.flash("message",'flash usage');//flash message appended
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.render('index',{message:req.flash('message')});
});

app.listen(3456,()=>{
console.log("listening at http://localhost:3456");});