str_A = input()



def has_two_unique(string):
    list_string = list(string)
    set_string = set(list_string)

    return len(list_string) != len(set_string)

if has_two_unique(str_A):
    print("Yes")
else:
    print("No")