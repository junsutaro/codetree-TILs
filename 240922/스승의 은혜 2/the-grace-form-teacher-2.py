n, b = map(int, input().split())
arr = [int(input()) for _ in range(n)]

arr.sort()

ans = 0;
# print(arr)

for i in range(n):
    # print(f"i 는 {i}")
    temp_sum = 0
    cnt = 0
    for j in range(n):
        cnt += 1
        if j == i:
            temp_sum += arr[j] / 2;
        else: 
            temp_sum += arr[j]

        if temp_sum > b:
            ans = max(ans, cnt)
            break
        
        # print(f"cnt가 {cnt} 일 때 {temp_sum}")


print(cnt)