interface stateValue {
    value: string
    hasErrors: boolean
}

interface HomePageValidatorProps {
    setUsername(payload: stateValue): void
    setRepository(payload: stateValue): void
    username: stateValue
    repository: stateValue
}

export const isFormValid = ({
    setRepository,
    setUsername,
    username,
    repository,
}: HomePageValidatorProps) => {
    let errorExists = false
    if (!!!username.value) {
        setUsername({
            ...username,
            hasErrors: true,
        })
        errorExists = true
    }

    if (!!!repository.value) {
        setRepository({
            ...repository,
            hasErrors: true,
        })
        errorExists = true
    }

    return !errorExists
}
