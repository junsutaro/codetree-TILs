A = list(input().strip())
length = len(A)

def find_len(A):
    temp = ''
    cnt = 1
    for i in range(1, len(A)):
        if A[i] != A[i-1]:
            temp += A[i-1] + str(cnt)
            cnt = 1
        else:
            cnt += 1

    temp += A[-1] + str(cnt)
    return len(temp)

ans = min(find_len(A[i:] + A[:i]) for i in range(length))

print(ans)