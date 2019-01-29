<?php
namespace KCSG;
class AddPost
{
    function PostForm()
    {
        echo "<div class=\"container\">
                 <div>
                    <h4>Product post info:</h4>
                 </div>
                    <div class=\"row\">
                     <div class=\"col-lg-6 col-md-10\">
                       <div class=\"container\"></div>
                         <div class=\"container\" id=\"map\"></div>
                           <script src=\"
                    https://maps.googleapis.com/maps/api/js?key=AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c&callback=initMap\"
                    async defer></script>
                         </div><div class=\"col-lg-6 col-md-10\">
                    <form action='/posts.php' method='post'>
                     <div class=\"form-row\">
                      <div class=\"form-group col-lg-12\">
                         <label for=\"formGroupExampleInput\">Product</label>
                         <input type=\"text\" class=\"form-control\" name='product_name' id='product_name' placeholder=\"Name of product\">
                     </div>
                    </div>
                    <div class=\"form-row\">
                     <div class=\"form-group col-lg-12 col-md-6\">
                     <label for=\"exampleFormControlTextarea1\">Description</label>
                     <textarea class=\"form-control\" name='description' id='description' rows=\"3\"></textarea>
                     </div>
                    </div>    
                    <div class=\"form-row\">
                      <div class=\"form-group col-lg-12 col-md-6\">
                        <label for=\"exampleFormControlFile1\">Product photo URL:</label>
                        <input type='text' class='form-control' id='img' name='img' \">
                      </div>
                    </div>
                    <div class=\"form-row\">
                      <div class=\"form-group col-md-6\">
                        <label for=\"inputCity\">Coordinates</label>
                        <input type=\"text\" class=\"form-control\" name='city' id='city' value='0' readonly>
                       </div>
                      <div class=\"form-group col-md-6\">
                         <label for=\"inputAddress\">Contact:</label>
                         <input type=\"text\" class=\"form-control\" name='address' id='address' placeholder='37060000000'>
                      </div>
                      <div class=\"form-group col-md-6\">
                 <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>
              </div>
            </div>
        </form>
      </div>
    </div>
</div>";
    }
}
