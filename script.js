let btn1shopping = document.getElementById('add_to_cart_1')
let btn2shopping = document.getElementById('add_to_cart_2')
let btn3shopping = document.getElementById('add_to_cart_3')
let btn4shopping = document.getElementById('add_to_cart_4')


let number_of_article_count_span = document.getElementById('numberofarticle')
let numberofarticle = 0;


btn1shopping.addEventListener("click", function(){
numberofarticle ++
number_of_article_count_span.textContent = numberofarticle;
});

btn2shopping.addEventListener("click", function(){
numberofarticle ++
number_of_article_count_span.textContent = numberofarticle;
});


btn3shopping.addEventListener("click", function(){
numberofarticle ++
number_of_article_count_span.textContent = numberofarticle;
});



btn4shopping.addEventListener("click", function(){
numberofarticle ++
number_of_article_count_span.textContent = numberofarticle;
});
