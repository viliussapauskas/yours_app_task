import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { loadIssuesAsync } from '../../redux/issues'
import { Button, Layout, TextInput } from '../components'
import styles from './styles.module.scss'
import { isFormValid } from './validator'

const initFormState = {
    value: '',
    hasErrors: false,
}

export const HomePage: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState(initFormState)
    const [repository, setRepository] = useState(initFormState)

    const onSubmit = () => {
        if (
            !isFormValid({
                setRepository,
                setUsername,
                repository,
                username,
            })
        ) {
            return
        } else {
            dispatch(
                loadIssuesAsync({
                    username: username.value,
                    repository: repository.value,
                })
            )

            navigate('/issues')
        }
    }

    const handleUsernameSet = (value: string) => {
        setUsername({
            value: value,
            hasErrors: false,
        })
    }
    const handleRepositorySet = (value: string) => {
        setRepository({
            value: value,
            hasErrors: false,
        })
    }

    return (
        <Layout style={styles.layout}>
            <div data-testid="home-page" className={styles.container}>
                <div className={styles.inputsContainer}>
                    <TextInput
                        setValue={handleUsernameSet}
                        payload={username}
                        label={'Owner'}
                        placeholder={'Owner name'}
                    />
                    <TextInput
                        setValue={handleRepositorySet}
                        payload={repository}
                        label={'Repository'}
                        placeholder={'Repository name'}
                    />
                </div>
                <div>
                    <Button onClick={onSubmit} />
                </div>
            </div>
        </Layout>
    )
}
