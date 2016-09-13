

        $("#hover-target-stagehands").hover(function(reveal) {
            $("#service-stagehands").stop().show();
        }, function(hide) {
            $("#service-stagehands").stop().hide();
        });
 

    
        $("#hover-target-techs").hover(function(reveal) {
            $("#service-techs").stop().show();
        }, function(hide) {
            $("#service-techs").stop().hide();
        });
 

    
        $("#hover-target-drivers").hover(function(reveal) {
            $("#service-drivers").stop().show();
        }, function(hide) {
            $("#service-drivers").stop().hide();
        });
 


    
        $("#hover-target-pa").hover(function(reveal) {
            $("#service-pa").stop().show();
        }, function(hide) {
            $("#service-pa").stop().hide();
        });
 

    
        $("#hover-target-runners").hover(function(reveal) {
            $("#service-runners").stop().show();
        }, function(hide) {
            $("#service-runners").stop().hide();
        });
 



        jQuery(function() {
            jQuery("#li-stagehands").click(function() {
                jQuery("#service-stagehands").toggle("slow");
                jQuery(".service-list")
            });
        });
 



        jQuery(function() {
            jQuery("#li-techs").click(function() {
                jQuery("#service-techs").toggle("fast");
            });
        });
 


        jQuery(function() {
            jQuery("#li-drivers").click(function() {
                jQuery("#service-drivers").toggle("fast");
            });
        });
 


        jQuery(function() {
            jQuery("#li-pa").click(function() {
                jQuery("#service-pa").toggle("fast");
            });
        });
 


        jQuery(function() {
            jQuery("#li-runners").click(function() {
                jQuery("#service-runners").toggle("fast");
            });
        });
 

    
        $("#hover-target-stagehands").hover(function(reveal) {
            $(".service-list-2-stagehands").stop().animate({
                opacity: .7,
                top: "-=200px",
            });
        }, function(hide) {
            $(".service-list-stagehands,.service-list-2-stagehands").stop().animate({
                opacity: 1,
                top: "+=200px",
            });
        });
 

    
        $("#hover-target-stagehands").hover(function(reveal) {
            $(".service-list-stagehands").stop().animate({
                opacity: 0,
            });
        }, function(hide) {
            $(".service-list-stagehands").stop().animate({
                opacity: 1,
            });
        });
 

    
        $("#hover-target-techs").hover(function(reveal) {
            $(".service-list-2").stop().animate({
                opacity: .7,
                top: "-=200px",
            });
        }, function(hide) {
            $(".service-list,.service-list-2").stop().animate({
                top: "+=200px",
            });
        });
 

    
        $("#hover-target-techs").hover(function(reveal) {
            $(".service-list").stop().animate({
                opacity: 0,
            });
        }, function(hide) {
            $(".service-list").stop().animate({
                opacity: 1,
            });
        });
 

    
        $("#hover-target-drivers").hover(function(reveal) {
            $(".service-list-2").stop().animate({
                opacity: .7,
                top: "-=200px",
            });
        }, function(hide) {
            $(".service-list,.service-list-2").stop().animate({
                opacity: 1,
                top: "+=200px",
            });
        });
 

    
        $("#hover-target-drivers").hover(function(reveal) {
            $(".service-list").stop().animate({
                opacity: 0,
            });
        }, function(hide) {
            $(".service-list").stop().animate({
                opacity: 1,
            });
        });
 

    
        $("#hover-target-pa").hover(function(reveal) {
            $(".service-list-2").stop().animate({
                opacity: .7,
                top: "-=200px",
            });
        }, function(hide) {
            $(".service-list,.service-list-2").stop().animate({
                opacity: 1,
                top: "+=200px",
            });
        });
 

    
        $("#hover-target-pa").hover(function(reveal) {
            $(".service-list").stop().animate({
                opacity: 0,
            });
        }, function(hide) {
            $(".service-list").stop().animate({
                opacity: 1,
            });
        });
 

    
        $("#hover-target-runners").hover(function(reveal) {
            $(".service-list-2").stop().animate({
                opacity: .7,
                top: "-=200px",
            });
        }, function(hide) {
            $(".service-list-2").stop().animate({
                opacity: 1,
                top: "+=200px",
            });
        });
 

    
        $("#hover-target-runners").hover(function(reveal) {
            $(".service-list").stop().animate({
                opacity: 0,
            });
        }, function(hide) {
            $(".service-list").stop().animate({
                opacity: 1,
            });
        });
 