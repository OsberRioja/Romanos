function romanizar(num)
{
    if(num>399)
    {
        return null;
    }
    const letras=['C','XC','L','XL','X','IX','V','IV','I'];
    const valores=[100,90,50,40,10,9,5,4,1];
    let result='';
    
    for(var i=0;i<letras.length;i++)
    {
        if(num==0)
        {
            i=letras.length;
        }
        while(num>=valores[i])
        {
            num=num-valores[i];
            result=result+letras[i];
        }
    }
    return result;
}

export default romanizar;