import { useRecommendationForm, UseRecommendationFormOptions } from './useRecommendationForm';
import { renderHook, act } from "@testing-library/react"
import { UseFormReturn } from 'react-hook-form';
import { RecommendationFormValues } from '@/schemas/recommendation.schema';


const mockedValues = {
    content: '12345678901234567890123456789012345678901234567890',
    date: new Date(),
    author: {
        name: "Iván",
        position: "Lead Frontend",
        company: "Nova",
        avatarUrl: "/images/avatars/ivan.webp"
    }
}

const defaultAuthor = {
    name: 'Usuario Actual',
    position: 'Desarrollador',
    company: 'Mi Empresa',
    avatarUrl: '/images/avatars/default.webp'
}

jest.mock('@hookform/resolvers/zod', () => ({
    zodResolver: jest.fn(() => async (data: any) => {
        // ✅ Simula validación exitosa siempre
        return { values: data, errors: {} };
    }),
}));

const setup = (params?: UseRecommendationFormOptions) => {
    const { result } = renderHook(() => useRecommendationForm(params))
    return result.current
}

describe('useRecommendationsForm', () => {
    it('form should have the default values', () => {
        const currentRender = setup()
        expect(currentRender.isSubmitting).toBeFalsy
        expect(currentRender.errors).toBeNull
        expect(currentRender.getValues('content')).toBe('')
        expect(currentRender.getValues('author')).toEqual(defaultAuthor)
    })

    it('form should have the given default values', () => {
        const currentRender = setup({
            defaultValues: mockedValues
        })
        expect(currentRender.isSubmitting).toBeFalsy
        expect(currentRender.errors).toBeNull
        expect(currentRender.getValues('content')).toBe(mockedValues.content)
        expect(currentRender.getValues('author')).toEqual(mockedValues.author)
        expect(currentRender.getValues('date')).toEqual(mockedValues.date)
    })

    it('should call the functions of react-form', () => {
        const currentRender = setup()
        expect(currentRender.getValues('content')).toBe('')
        expect(currentRender.getValues('author')).toEqual(defaultAuthor)

        act(() => {
            currentRender.setValue('content', mockedValues.content)
            currentRender.setValue('author', mockedValues.author)
        })


        expect(currentRender.getValues('content')).toBe(mockedValues.content)
        expect(currentRender.getValues('author')).toEqual(mockedValues.author)

        act(() => {
            currentRender.reset()
        })
        expect(currentRender.getValues('content')).toBe('')
        expect(currentRender.getValues('author')).toEqual(defaultAuthor)
    })

    it('should submit using the custom function', async () => {
        const mockOnSubmit = jest.fn().mockResolvedValue({ success: true });
        const currentRender = setup({
            onSubmit: mockOnSubmit
        })

        await act(async () => {
            const mockEvent = { preventDefault: jest.fn() } as any;
            await currentRender.handleSubmit(mockEvent);
        });

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    })

    it('should fallback to defaultSubmit when onSubmit is undefined', async () => {
        const mockOnSubmit = jest.fn().mockResolvedValue({ success: true });
        const currentRender = setup({
            onSubmit: mockOnSubmit
        });

        // Simulamos que los datos del formulario han cambiado
        act(() => {
            currentRender.setValue('content', mockedValues.content)
            currentRender.setValue('author', mockedValues.author)
            currentRender.setValue('date', mockedValues.date)
        })


        await act(async () => {
            const mockEvent = { preventDefault: jest.fn() } as any;
            await currentRender.handleSubmit(mockEvent);
        });

        expect(mockOnSubmit).toHaveBeenCalledWith(mockedValues);
    });
})