import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface UserData{
    name: string;
    email: string;
    role: string;
    lastActive: string;
}

// Simulate an API call that takes time to resolve
const fetchUserProfile = async () => {
    console.log("🔌 API Call Made: Fetching user profile...");
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Senior Developer",
        lastActive: "2 hours ago"
    };
};

// Each component manages its own data fetching and state
const UserHeader = () => {
    const [data, setData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result: any = await fetchUserProfile();
            setData(result);
            setIsLoading(false);
        };
        loadData();
    }, []);

    if (isLoading) return (
        <div className="flex items-center gap-2 p-4 border rounded bg-gray-50">
            <Loader2 className="animate-spin" size={16} />
            <span>Loading header...</span>
        </div>
    );

    return (
        <div className="p-4 border rounded bg-blue-50">
            <h3 className="font-bold">Header Component</h3>
            Welcome back, {data?.name}
        </div>
    );
};

const UserSettings = () => {
    const [data, setData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result: any = await fetchUserProfile();
            setData(result);
            setIsLoading(false);
        };
        loadData();
    }, []);

    if (isLoading) return (
        <div className="flex items-center gap-2 p-4 border rounded bg-gray-50">
            <Loader2 className="animate-spin" size={16} />
            <span>Loading settings...</span>
        </div>
    );

    return (
        <div className="p-4 border rounded bg-green-50">
            <h3 className="font-bold">Settings Component</h3>
            <div>Email: {data?.email}</div>
            <div>Role: {data?.role}</div>
        </div>
    );
};

const UserActivity = () => {
    const [data, setData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            const result: any = await fetchUserProfile();
            setData(result);
            setIsLoading(false);
        };
        loadData();
    }, []);

    if (isLoading) return (
        <div className="flex items-center gap-2 p-4 border rounded bg-gray-50">
            <Loader2 className="animate-spin" size={16} />
            <span>Loading activity...</span>
        </div>
    );

    return (
        <div className="p-4 border rounded bg-yellow-50">
            <h3 className="font-bold">Activity Component</h3>
            Last active: {data?.lastActive}
        </div>
    );
};

const WithoutDeduplication = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="p-6 max-w-2xl mx-auto space-y-4 bg-gray-200">
            <div className="space-y-4">
                <h2 className="text-xl font-bold">User Dashboard Demo (Without React Query)</h2>
                <p className="text-gray-600">
                    This demo shows how components fetch data independently.
                    Watch the console to see multiple API calls being made!
                </p>
                <button 
                    onClick={() => setShowAll(prev => !prev)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {showAll ? "Hide Components" : "Load All Components"}
                </button>
            </div>

            <div className="space-y-4">
                <UserHeader />
                {showAll && (
                    <>
                        <UserSettings />
                        <UserActivity />
                    </>
                )}
            </div>
        </div>
    );
};

export default WithoutDeduplication;