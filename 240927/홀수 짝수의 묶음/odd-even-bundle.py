n = int(input())
arr = list(map(int, input().split()))

rest = arr
odd_cnt = sum(1 for num in rest if num % 2 == 1)

# 합이 홀수 -> 남은 홀수 갯수가 홀수
# 합이 짝수 -> 남은 홀수 갯수가 짝수 or 없다

ans = 0
now = 'even' # 나머지가 0이면 짝으로 보게 if temp // 2 == now:

sum_val = 0
for _ in range(n):
    temp = rest.pop(0)
    if temp % 2 == 1:
        odd_cnt -= 1
    sum_val += temp

    if now == 'even':
        # 지금까지 더한게 다 짝수라면
        if sum_val % 2 == 0:
            # REST가 0이거나 뒤에 나온것들로 홀이 만들어지는가 판단해야 함
            if len(rest) <= 2:
                if odd_cnt == 1:
                    ans += 1
                    now = 'odd'
                    sum_val = 0
                else:
                    ans += 1
                    break
            elif len(rest) == 3:
                if odd_cnt:
                    ans += 1
                    now = 'odd'
                    sum_val = 0
                else:
                    ans += 1
                    break
            else:
                ans += 1
                now = 'odd'
                sum_val = 0


    if now == 'odd':
        # 지금까지 더한게 다 홀수라면
        if sum_val % 2 == 1:
            # 1개 남았으면?? odd가 없어야 함
            if len(rest) == 1:
                if odd_cnt == 1:
                    ans += 1
                    now = 'even'
                    sum_val = 0
                else:
                    ans += 1

            else:
                ans += 1
                now = 'even'
                sum_val = 0


print(ans)