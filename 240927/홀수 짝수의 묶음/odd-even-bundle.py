n = int(input())
arr = list(map(int, input().split()))

# 홀수와 짝수의 개수 계산
odd_count = sum(1 for num in arr if num % 2 == 1)
even_count = n - odd_count

group_num = 0
while True:
    if group_num % 2 == 0:
        if even_count:
            even_count -= 1
            group_num += 1
        elif odd_count >= 2:
            odd_count -= 2
            group_num += 1
        else:
            if even_count > 0 or odd_count > 0:
                group_num -= 1
            break
    else:
        if odd_count:
            odd_count -= 1
            group_num += 1
        else:
            break
    
print(group_num)