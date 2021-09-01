$(function() {
    
   // Fading the silhouette image.
   $('#whoAmI').hover(function() {
       
       $(this).stop().fadeTo('normal', 1);
       
   }, function() {
       
       $(this).stop().fadeTo('normal', .4);
       
   });
    
    // Toggling the mystery panel.
    $('img#whoAmI').click(function() {
   
        $('div#mysteryPanel').toggle();
         
    });
    
    // Revealing who is behind the silhouette image.
    $('#mysteryPanel > h3').click(function(){
        
        $('img#silhouette').fadeOut(5000, 0);
        
        $('img#revealed').delay(3000).fadeIn(1000, function(){
                                             
            $('#mysteryPanel > h3').text('Marechal Patrice MacMahon');
            $('#mysteryPanel > h3').css({
                
                cursor: 'default'
                
            })
                                             
        });   
        
    });
    
});