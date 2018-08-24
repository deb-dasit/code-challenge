# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#

def compute(A, B):
    if len(A)!=len(B):
        raise ValueError
    dif=[i for i in range(len(A)) if A[i]!=B[i]]
    return len(dif)
