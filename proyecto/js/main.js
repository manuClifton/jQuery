
$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf("index") > -1){
      
      $('.bxslider').bxSlider({
              mode: 'fade',
              captions: true,
              slideWidth: 1200
            });
    }
    

    //Posts
    if(window.location.href.indexOf("index") > -1){
      var posts = [
      {
        title: "Prueba de titulo 1",
        date: moment().format("DD MM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis"
      },
      {
        title: "Prueba de titulo 2",
        date: moment().format("DD MM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis"
      },
      {
        title: "Prueba de titulo 3",
        date: moment().format("DD MM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis"
      },
      {
        title: "Prueba de titulo 4",
        date: moment().format("DD MM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis"
      },
      {
        title: "Prueba de titulo 5",
        date: moment().format("DD MM YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et aut, ipsa fugiat molestiae quos illum culpa dolorem dolor sapiente deleniti veniam. Explicabo, officiis autem dolor doloribus mollitia adipisci? Corporis"
      },
    ];

    posts.forEach((item, index)=>{
        var post = `
                  <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                       ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;
        $('#posts').append(post);
    });

    }//fin IF
    

    //Selector de temas
    var theme = $("#theme");

    if(localStorage.getItem("Tema") == null){
      theme.attr("href", "css/green.css")
    }else{
      theme.attr("href", localStorage.getItem("Tema"));
    }

    //localStorage.clear();

    $("#to-green").click(function(){
      theme.attr("href", "css/green.css");
      localStorage.setItem("Tema", theme.attr("href"));
    });
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
      localStorage.setItem("Tema", theme.attr("href"));
    });
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
      localStorage.setItem("Tema", theme.attr("href"));
    });

    //Scroll hacia arriba
    $('.subir').click(function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });

    //Login
    $("#login form").submit(function(){
      var form_name = $("#form_name").val();
      
      localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
      var about_parrafo = $("#about p")

      $("#about p").html("<strong><br>Bienvenido, "+form_name+"</strong>");
      about_parrafo.append("<a href='#' id='logaut'>Cerrar sesión</a>");

      $("#login").hide();
    
      $("#logaut").click(function(){
        localStorage.clear();
        location.reload();
      })
    }

    // ACORDEON
    if(window.location.href.indexOf("about") > -1){
      $("#acordeon").accordion();
    }

    //RELOJ
    if(window.location.href.indexOf("reloj") > -1){
      setInterval(function(){
        var reloj = moment().format("h:mm:ss a");
         $("#reloj").html(reloj);
      }, 1000)
      
    }

    //VALIDACION
    if(window.location.href.indexOf("contact") > -1){
      $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
      });
      
      $.validate({
        lang: 'es',
        modules : 'date',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
      });
    }
    
});


