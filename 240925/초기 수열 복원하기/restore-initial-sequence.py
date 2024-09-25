n = int(input())
nums = list(map(int, input().split()))

 

def find_ans(start):
    cnt_list = [0] * (n + 1)
    ans_list = []

    cnt_list[start] = 1
    ans_list.append(start)

    idx = 0
    num = start


    while True:
        found = False
        for i in range(1, n+1):
            if cnt_list[i]:
                continue
            if num + i == nums[idx]:
                ans_list.append(i)
                cnt_list[i] = 1
                idx += 1
                num = i
                found = True
                break

        if not found:
            break;
        
        if idx >= len(nums):
            break
    

    if len(ans_list) == n:
        return ans_list


for i in range(1, n+1):
    ans = find_ans(i)
    if ans:
        print(' '.join(map(str, ans)))
        break