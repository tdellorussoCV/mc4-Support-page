<%
    If Request.ServerVariables("HTTPS")  = "off" Then
        Response.Redirect "https://" & Request.ServerVariables("HTTP_HOST") & Request.ServerVariables("UNENCODED_URL")
    ElseIf Request.ServerVariables("HTTPS")  = "on" Then
        Response.Redirect "https://" & Request.ServerVariables("HTTP_HOST") & Request.ServerVariables("UNENCODED_URL")
    End If
%>