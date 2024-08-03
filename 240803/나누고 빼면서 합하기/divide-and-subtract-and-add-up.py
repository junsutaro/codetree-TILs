n, m = map(int,input().split())
_list = list(map(int, input().split()))

def find_ans(_list, m):
    _sum = 0

    while m >= 1:
        _sum += _list[m-1]

        if m % 2:
            m -= 1
        else:
            m //= 2

    return _sum

print(find_ans(_list, m))