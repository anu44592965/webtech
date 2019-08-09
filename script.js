header{
	background-image: url("C:/Users/manu/Documents/webtech/image/cool.jpg");
	height: 100vh;
	background-size: cover;
	background-position: center;
}
ul{
	float: right;
	list-style-type: none;
	margin-top: 25px;
}
ul li{
	display: inline-block;
}
ul li a{
	text-decoration: none;
	color: blue;
	padding: 5px 20px;
	border: 1px solid transparent;
	transition: 0.6s ease;
}
ul li a:hover{
	background-color: #fff;
	color: #000;
}
.main{
	max-height: 1200px;
	margin: auto;
}
ul li.active a{
	background-color: #fff;
	color: #000;
}
.title{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
.title h1{
	color: #fff;
	font-size: 70px;
}
.button{
	position: sticky;
	top: 620%;
	left: 100%;
	transform: translate(-50%,-50%);
}
.btn{
	border: 1px solid #fff;
	padding: 10px 30px;
	color:#fff;
	text-decoration: none;
	transition: 0.6s ease;
}
.btn:hover{
	background-color: #fff;
	color: #000;
}