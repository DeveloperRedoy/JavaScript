$(document).ready(function()
{
 $(".range").change(add_filter).mousemove(add_filter);
});
	
function add_filter()
{
 var grayscale_val=$("#grayscale").val();
 var blur_val=$("#blur").val();
 var exposure_val=$("#exposure").val();
 var sepia_val=$("#sepia").val();
 var opacity_val=$("#opacity").val();

 $("#edit_image").css("-webkit-filter","grayscale("+grayscale_val+"%) blur("+blur_val+"px) brightness("+exposure_val+"%) sepia("+sepia_val+"%) opacity("+opacity_val+"%)");
}