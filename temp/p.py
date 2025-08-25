n = 7

i = 1
while(i <= n):
    string = ""
    j = 1
    while(j <= n):
        if(i == 1 or i == n):
            string += "*"
        else:
            if(j == 1 or j == n):
                string += "*"
            else:
                string += " "
        j += 1
    print(string)
    i += 1