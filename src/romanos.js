function romanizar(num)
{
    if(num==1)
    {
        return "I";
    }
    if(num==5)
    {
        return "V";
    }
    if(num==10)
    {
        return "X";
    }
    if(num==50)
    {
        return "L";
    }
}

export default romanizar;