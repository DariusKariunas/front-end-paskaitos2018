<?php
/**
 * Created by PhpStorm.
 * User: Turbo
 * Date: 2019-01-15
 * Time: 19:49
 */

namespace KCSG;


class chat
{

    function chat(){

        echo "
            <div class=\"chat-popup\" id=\"myForm\">
    <form action=\"/action_page.php\" class=\"form-container\">
        <h1>Chat</h1>

        <label for=\"msg\"><b>Message</b></label>
        <textarea placeholder=\"Type message..\" name=\"msg\" required></textarea>

        <button type=\"submit\" class=\"btn\">Send</button>
        <button type=\"button\" class=\"btn cancel\" onclick=\"closeForm()\">Close</button>
    </form>
</div>
        
        
        
        
        
        ";

    }


}