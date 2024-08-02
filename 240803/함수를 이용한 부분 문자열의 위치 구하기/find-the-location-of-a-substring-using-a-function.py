str_A = input()
str_B = input()


def find_goal(A, B):
    for i in range(len(A) - len(B) + 1):
        if A[i] == B[0]:
            match = True

            for j in range(len(B)):
                if A[i + j] != B[j]:
                    match = False
            
            if match:
                return i
    return -1

print(find_goal(str_A, str_B))