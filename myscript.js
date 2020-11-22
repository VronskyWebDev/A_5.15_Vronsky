jQuery(document).ready(function ($) {
    //Код

const var1Node = $('.js_var1');
const var2Node = $('.js_var2');
const var3Node = $('.js_var3');
const var4Node = $('.js_var4');
const var5Node = $('.js_var5');
const var6Node = $('.js_var6');
const speechNode = $('.js_speech');

const btnCreate = $('.js_btn_create');
const btnReplace = $('.js_btn_replace');
const textNode = $('.js_text');


const startObj = {
    "text": [
        "Жили-были {var1} да {var2}",
        "Была у них {var3}",
        "Снесла {var3} {var4}, не простое - золотое",
        "- {var1} бил, бил - не разбил",
        "- {var2} била, била - не разбила",
        "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
        "{var1} плачет, {var2} плачет, а {var3} кудахчет:", "{speech}"
    ]
};

btnCreate.click(function () {
    textNode.html(startObj.text);
})

btnReplace.click(function () {
    const var1 = var1Node.val();
    const var2 = var2Node.val();
    const var3 = var3Node.val();
    const var4 = var4Node.val();
    const var5 = var5Node.val();
    const var6 = var6Node.val();
    const speech = speechNode.val();

    const newObj = {
        "text": [
            `Жили-были ${var1} да ${var2}`,
            `Была у них ${var3}`,
            `Снесла ${var3} ${var4}, не простое - золотое`,
            `- ${var1} бил, бил - не разбил`,
            `- ${var2} била, била - не разбила`,
            `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
            `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
            `${speech}`,
        ]
    };


    textNode.html(newObj.text);
})


});