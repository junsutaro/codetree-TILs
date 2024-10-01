A = list(input().strip())
length = len(A)

ans = float('inf')

def find_len(A):
    global ans

    temp = ''
    
    cnt = 1
    for i in range(1, len(A)):
        now = A[i-1]
        if A[i] != A[i-1]:
            temp += now
            temp += str(cnt)
            cnt = 1
        else:
            cnt += 1

    temp += now
    temp += str(cnt)
    # print(A)
    # print(temp)
    ans = min(ans, len(temp))

for _ in range(length):
    last = A.pop(0)
    A.append(last)

    find_len(A)

print(ans)