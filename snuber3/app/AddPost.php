<?php
namespace KCSG;
class AddPost
{
    function PostForm(){
        echo "<div class=\"container\">
  <div>
    <h4>Product post info:</h4>
  </div>
  <form action=\"\" method=\"\">
      <div class=\"form-row\">
    <div class=\"form-group col-lg-12\">
      <label for=\"formGroupExampleInput\">Product</label>
      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Name of product\">
    </div>
      </div>
    <div class=\"form-row\">
      <div class=\"form-group col-lg-12 col-md-6\">
        <label for=\"exampleFormControlTextarea1\">Describtion</label>
        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>
      </div>
    </div>
    <div class=\"form-row\">
      <div class=\"form-group col-lg-12 col-md-6\">
        <label for=\"inputAddress\">Address</label>
        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">
      </div>
    </div>
    <div class=\"form-row\">
      <div class=\"form-group col-md-6\">
        <label for=\"inputCity\">City</label>
        <input type=\"text\" class=\"form-control\" id=\"inputCity\">
      </div>
      <div class=\"form-group col-md-6\">
        <label for=\"inputZip\">Zip</label>
        <input type=\"text\" class=\"form-control\" id=\"inputZip\">
      </div>
    </div>
    <div class=\"form-row\">
      <div class=\"form-group col-md-6\">
        <label for=\"exampleFormControlFile1\">Add product photo:</label>
        <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\" \">
      </div>
      <div class=\"form-group col-md-6\">
        <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>
      </div>
    </div>
  </form>
</div>";
    }
}