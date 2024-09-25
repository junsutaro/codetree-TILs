n, m, p = map(int, input().split())
msgs = [input().split() for _ in range(m)]

# Convert unread counts to integers
msgs = [(c, int(u)) for c, u in msgs]

# Initialize the list of all people
ans_lst = [chr(65 + i) for i in range(n)]

u_p = msgs[p - 1][1]
new_p = p

# Find the earliest message where the unread count matches that of message p
for i in range(p - 2, -1, -1):
    if msgs[i][1] == u_p:
        new_p = i + 1
    else:
        break

# Remove senders from new_p onward
for i in range(new_p - 1, m):
    c = msgs[i][0]
    if c in ans_lst:
        ans_lst.remove(c)

ans_lst.sort()
print(' '.join(ans_lst))