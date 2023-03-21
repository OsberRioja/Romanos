function romanizar(num)
{
    const letras=['X','IX','V','IV','I'];
    const valores=[10,9,5,4,1];
    let result='';
    
    for(var i=0;i<letras.length;i++)
    {
        while(num>=valores[i])
        {
            num=num-valores[i];
            result=result+letras[i];
        }
    }
    return result;
}

export default romanizar;