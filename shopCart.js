$(function () {
    getSum();
    toggleTool();
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        toggleTool();
    })
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        }
        else {
            $(".checkall").prop("checked", false);
        }
        toggleTool();
    })

    $(".increment").click(function () {
        var count = $(this).siblings(".itxt").val();
        count++;
        $(this).siblings(".itxt").val(count);
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * count).toFixed(2));
        getSum()
    })

    $(".decrement").click(function () {
        var count = $(this).siblings(".itxt").val();
        count--;
        if (count > 0) {
            $(this).siblings(".itxt").val(count);
            var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
            $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * count).toFixed(2));
            getSum();
        }
    })

    $(".itxt").change(function () {
        var count = $(this).val();
        var price = $(this).parents(".p-num").siblings(".p-price").text().substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * count).toFixed(2));
        getSum()
    })

    function getSum() {
        var totalItem = 0;
        var totalPrice = 0;
        $(".itxt").each(function (i, ele) {
            totalItem += parseInt($(ele).val());
        })
        $(".p-sum").each(function (i, ele) {
            totalPrice += parseFloat($(ele).text().substr(1));
        })
        $(".amount-sum em").text(totalItem);
        $(".price-sum em").text("￥" + totalPrice.toFixed(2));
    }

    function toggleTool() {
        $(".j-checkbox").parents(".cart-item").removeClass("check-cart-item");
        $(".j-checkbox:checked").parents(".cart-item").addClass("check-cart-item");
    }

    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })
})