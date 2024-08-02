a, b = map(int, input().split())

def modify_and_return(a, b):
    if a > b:
        a *= 2
        b += 10
    else:
        a += 10
        b *= 2
    return a, b

a, b = modify_and_return(a, b)

print(a, b)