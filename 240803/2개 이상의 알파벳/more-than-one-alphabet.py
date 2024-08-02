str_A = input()

def has_two_unique(string):
    list_string = list(string)
    set_string = set(list_string)
    return len(set_string) >= 2

if has_two_unique(string):
    print("Yes")
else:
    print("No")